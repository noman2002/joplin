import { CommandRuntime, CommandDeclaration, CommandContext } from '@joplin/lib/services/CommandService';
import { _ } from '@joplin/lib/locale';

export const declaration: CommandDeclaration = {
	name: 'showShareNoteDialog',
	label: () => _('Share note...'),
};

export const runtime = (comp: any): CommandRuntime => {
	return {
		execute: async (context: CommandContext, noteIds: string[] = null) => {
			noteIds = noteIds || context.state.selectedNoteIds;

			comp.setState({
				shareNoteDialogOptions: {
					noteIds: noteIds,
					visible: true,
				},
			});
		},
<<<<<<< HEAD
=======
		enabledCondition: 'joplinServerConnected && oneNoteSelected',
>>>>>>> 6f2f24171df1be961381a810732aa7aa908d8c88
	};
};
