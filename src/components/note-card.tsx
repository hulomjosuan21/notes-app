import {BellPlus, Palette, Pin, UserRoundPlus, Image as ImageIcon, Archive, EllipsisVertical} from "lucide-react";
import CircleBtn from "@/components/circle-btn";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function NoteCard(){
    return (
        <article className={'w-[238px] max-w[238px] min-h-[103px] h-fit max-h-[508px] border rounded-lg overflow-hidden relative'}>
            <div className={'pt-3 px-4 flex'}>
                <div className={'flex-1'}>
                    <span className={'font-medium text-lg break-words'}>Nextjs env local Bogo  ss Basketball League Network</span>
                </div>
                <div className={''}>
                    <CircleBtn>
                        <Pin className="w-4 h-4"/>
                    </CircleBtn>
                </div>
            </div>

            <div className={'text-sm py-3 px-4'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consequuntur et explicabo iure modi nisi quas. Ipsum, labore necessitatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda corporis culpa dolorem ea eum excepturi itaque modi nemo nihil officiis provident, quibusdam. Accusantium beatae, incidunt placeat quasi quod vitae? Amet consequuntur delectus dolorem et excepturi fugiat impedit iusto officia perspiciatis placeat quaerat reprehenderit repudiandae similique, sunt vero vitae voluptatibus.</div>

            <div className={'flex justify-between items-center pb-3 px-1 absolute bottom-0 left-0 w-full bg-background pt-2'}>
                <CircleBtn tooltipText={"Remind me"}>
                    <BellPlus className="logo-sm"/>
                </CircleBtn>

                <CircleBtn tooltipText={"Collaborator"}>
                    <UserRoundPlus className="logo-sm"/>
                </CircleBtn>

                <CircleBtn tooltipText={"Background options"}>
                    <Palette className="logo-sm"/>
                </CircleBtn>

                <CircleBtn tooltipText={"Add image"}>
                    <ImageIcon className="logo-sm"/>
                </CircleBtn>

                <CircleBtn tooltipText={"Archive"}>
                    <Archive className="logo-sm"/>
                </CircleBtn>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild={false}>
                        <CircleBtn tooltipText={"More"}>
                            <EllipsisVertical className="logo-sm"/>
                        </CircleBtn>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Delete note</DropdownMenuItem>
                        <DropdownMenuItem>Add label</DropdownMenuItem>
                        <DropdownMenuItem>Make a copy</DropdownMenuItem>
                        <DropdownMenuItem>Version history</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </article>
    )
}