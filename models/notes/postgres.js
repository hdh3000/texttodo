// Use cases
	// get list of todos
		// based on tags
	// cross off lists of todos
	// get random todo to crush
	// get pinged
	//

// Schema
	// users have 
		// ids
		// names
		// numbers
		// M: list

	// todos have
		// ids
		// text
		// order
		// state
		// R: List
		// M: hashtags

	// lists have
		// Ids
		// phone numbers
		// M: users
		// M: todos

	// hash tags have
		// ids
		// text
		// M: todos

	// many to many tables
		// hash_todos
		// user_list

