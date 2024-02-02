
import { LuClipboardEdit, LuTrash2 } from "react-icons/lu";
import Button from "./Form/Button";
import InputCheckboxCuston from "./Form/InputCheckboxCuston";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { UserData } from "../../types";

type PublicationData = {
  id: string | number;
  avatar_url?: string | null;
  name: string;
  email: string;
  description: string;
  link: string;
};

type TypeList = "user" | "publication";

type TableListProps = {
  typeList: TypeList;
  dataHead: string[];
  dataBody?: (UserData | PublicationData)[] | null;
};

export default function TableList({ typeList, dataHead, dataBody }: TableListProps) {

  console.log(dataBody);
  

  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-webschool-300">
            <th className="px-4 py-2">
              <InputCheckboxCuston id="all" />
            </th>
            {dataHead.map((head, index) => (
              <th key={index} className="max-w-max px-4 py-2">
                {head}
              </th>
            ))}
            <th className="px-4 py-2">Editar</th>
            <th className="px-4 py-2">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {dataBody?.map((body, index) => (
            <tr key={index} className="hover:bg-zinc-50 dark:hover:bg-webschool-300/40">
              <td className="px-4 py-2">
                <InputCheckboxCuston id={`${index}`} />
              </td>
              <td>
                <div className="w-full px-4 py-2 flex items-center justify-center">
                  {typeList !== "user" ? body.id : body.Processo}
                </div>
              </td>

              <td className="">
                <div className="flex items-center justify-start gap-2 px-4 py-2">
                  <Avatar className="w-10 h-10 cursor-default bg-zinc-200" data={{ avatar_url: body.avatar_url, name: body.name }} />
                  <div className="flex flex-col">
                    <span className="text-sm">{body.Nome}</span>
                    <span className="text-xs text-zinc-600">{body.Email}</span>
                  </div>
                </div>
              </td>

              {typeList === "publication" && (
                <>
                  <td className="px-4 py-2">
                    <div className="flex items-center justify-center">
                      {body.description}
                    </div>
                  </td>
                  <td className="text-xs px-4 py-2 text-zinc-400 dark:text-zinc-600 dark:hover:text-webschool-first hover:text-webschool-first hover:underline cursor-pointer">
                    <div className="w-full flex items-center justify-center">
                      <Link to={body.link}>
                        Ver a Publicação
                      </Link>
                    </div>
                  </td>
                </>
              )}

              {typeList === "user" && (
                <>
                  <td className="px-4 py-2">
                    <div className="w-full flex items-center justify-center">
                      {body.identificacao}
                    </div>
                  </td>
                  <td>
                    <div className="w-full flex items-center justify-center">
                      {body.Telefone}
                    </div>
                  </td>
                  <td>
                    <div className="w-full flex items-center justify-center">
                      {body.sexo}
                    </div>
                  </td>
                </>
              )}
              <td className="max-w-max px-4 py-2">
                <div className="w-full flex items-center justify-center">
                  <Button className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
                    <span>Editar</span>
                    <LuClipboardEdit size={20} strokeWidth={1.5} />
                  </Button>
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="w-full flex items-center justify-center">
                  <Button className="py-1 text-zinc-900 bg-zinc-200 dark:text-white dark:bg-webschool-200">
                    <span>Excluir</span>
                    <LuTrash2 size={20} strokeWidth={1.5} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-zinc-900 dark:text-white">1-10</span> of <span className="font-semibold text-zinc-900 dark:text-white">1000</span></span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-zinc-500 bg-white border border-zinc-300 rounded-s-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">Previous</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">1</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-zinc-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-zinc-700 dark:bg-zinc-700 dark:text-white">3</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">4</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">5</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-zinc-500 bg-white border border-zinc-300 rounded-e-lg hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        </nav>                
    </div>
  );
}
