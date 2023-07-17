package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFileMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFileMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFileMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFileMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_NewNote) at AccountFileMenuActions.pcf: line 21, column 93
    function action_1 () : void {
      NewAccountNoteWorksheet.goInWorkspace(account)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_NewSubmission) at AccountFileMenuActions.pcf: line 41, column 49
    function action_10 () : void {
      NewSubmission.go(account)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_WithdrawAccount) at AccountFileMenuActions.pcf: line 56, column 103
    function action_17 () : void {
      updateAccountStatusAndCommit(AccountStatus.TC_WITHDRAWN)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_ReopenAccount) at AccountFileMenuActions.pcf: line 61, column 103
    function action_19 () : void {
      updateAccountStatusAndCommit(AccountStatus.TC_PENDING)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_MovePolicies) at AccountFileMenuActions.pcf: line 66, column 129
    function action_21 () : void {
      AccountFile_AccountSearch.go(account, gw.account.AccountSearchReason.MovePolicies)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_RewritePolicies) at AccountFileMenuActions.pcf: line 71, column 132
    function action_24 () : void {
      AccountFile_AccountSearch.go(account, gw.account.AccountSearchReason.RewritePolicies)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_MergeAccounts) at AccountFileMenuActions.pcf: line 76, column 130
    function action_27 () : void {
      AccountFile_AccountSearch.go(account, gw.account.AccountSearchReason.MergeAccounts)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_NewEmail) at AccountFileMenuActions.pcf: line 35, column 72
    function action_7 () : void {
      EmailWorksheet.goInWorkspace(account)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_NewSubmission) at AccountFileMenuActions.pcf: line 41, column 49
    function action_dest_11 () : pcf.api.Destination {
      return pcf.NewSubmission.createDestination(account)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_NewNote) at AccountFileMenuActions.pcf: line 21, column 93
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewAccountNoteWorksheet.createDestination(account)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_MovePolicies) at AccountFileMenuActions.pcf: line 66, column 129
    function action_dest_22 () : pcf.api.Destination {
      return pcf.AccountFile_AccountSearch.createDestination(account, gw.account.AccountSearchReason.MovePolicies)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_RewritePolicies) at AccountFileMenuActions.pcf: line 71, column 132
    function action_dest_25 () : pcf.api.Destination {
      return pcf.AccountFile_AccountSearch.createDestination(account, gw.account.AccountSearchReason.RewritePolicies)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_MergeAccounts) at AccountFileMenuActions.pcf: line 76, column 130
    function action_dest_28 () : pcf.api.Destination {
      return pcf.AccountFile_AccountSearch.createDestination(account, gw.account.AccountSearchReason.MergeAccounts)
    }
    
    // 'action' attribute on MenuItem (id=AccountFileMenuActions_NewEmail) at AccountFileMenuActions.pcf: line 35, column 72
    function action_dest_8 () : pcf.api.Destination {
      return pcf.EmailWorksheet.createDestination(account)
    }
    
    // 'def' attribute on MenuItemSetRef at AccountFileMenuActions.pcf: line 48, column 62
    function def_onEnter_12 (def :  pcf.NewActivityMenuItemSet) : void {
      def.onEnter(account, null, null)
    }
    
    // 'def' attribute on MenuItemSetRef at AccountFileMenuActions.pcf: line 28, column 57
    function def_onEnter_3 (def :  pcf.AccountNewDocumentMenuItemSet) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on MenuItemSetRef at AccountFileMenuActions.pcf: line 48, column 62
    function def_refreshVariables_13 (def :  pcf.NewActivityMenuItemSet) : void {
      def.refreshVariables(account, null, null)
    }
    
    // 'def' attribute on MenuItemSetRef at AccountFileMenuActions.pcf: line 28, column 57
    function def_refreshVariables_4 (def :  pcf.AccountNewDocumentMenuItemSet) : void {
      def.refreshVariables(account)
    }
    
    // 'visible' attribute on MenuItem (id=AccountFileMenuActions_NewNote) at AccountFileMenuActions.pcf: line 21, column 93
    function visible_0 () : java.lang.Boolean {
      return perm.Note.create and account.AccountStatus != AccountStatus.TC_WITHDRAWN
    }
    
    // 'visible' attribute on MenuItem (id=AccountFileMenuActions_NewActivity) at AccountFileMenuActions.pcf: line 46, column 97
    function visible_14 () : java.lang.Boolean {
      return perm.System.actcreate and account.AccountStatus != AccountStatus.TC_WITHDRAWN
    }
    
    // 'visible' attribute on MenuItem (id=AccountFileMenuActions_Create) at AccountFileMenuActions.pcf: line 15, column 44
    function visible_15 () : java.lang.Boolean {
      return perm.Account.edit(account)
    }
    
    // 'visible' attribute on MenuItem (id=AccountFileMenuActions_WithdrawAccount) at AccountFileMenuActions.pcf: line 56, column 103
    function visible_16 () : java.lang.Boolean {
      return account.AccountStatus == AccountStatus.TC_PENDING and perm.Account.withdraw(account)
    }
    
    // 'visible' attribute on MenuItem (id=AccountFileMenuActions_ReopenAccount) at AccountFileMenuActions.pcf: line 61, column 103
    function visible_18 () : java.lang.Boolean {
      return account.AccountStatus == AccountStatus.TC_WITHDRAWN and perm.Account.reopen(account)
    }
    
    // 'visible' attribute on MenuItem (id=AccountFileMenuActions_MovePolicies) at AccountFileMenuActions.pcf: line 66, column 129
    function visible_20 () : java.lang.Boolean {
      return perm.Account.movePolicies(account) and !account.Locked and account.AccountStatus != AccountStatus.TC_WITHDRAWN
    }
    
    // 'visible' attribute on MenuItem (id=AccountFileMenuActions_RewritePolicies) at AccountFileMenuActions.pcf: line 71, column 132
    function visible_23 () : java.lang.Boolean {
      return perm.Account.rewritePolicies(account) and !account.Locked and account.AccountStatus != AccountStatus.TC_WITHDRAWN
    }
    
    // 'visible' attribute on MenuItem (id=AccountFileMenuActions_MergeAccounts) at AccountFileMenuActions.pcf: line 76, column 130
    function visible_26 () : java.lang.Boolean {
      return perm.Account.mergeAccounts(account) and !account.Locked and account.AccountStatus != AccountStatus.TC_WITHDRAWN
    }
    
    // 'visible' attribute on MenuItem (id=AccountFileMenuActions_NewDocument) at AccountFileMenuActions.pcf: line 26, column 168
    function visible_5 () : java.lang.Boolean {
      return perm.Document.create and account.AccountStatus != AccountStatus.TC_WITHDRAWN and gw.document.DocumentsActionsUIHelper.DocumentContentServerAvailable
    }
    
    // 'visible' attribute on MenuItem (id=AccountFileMenuActions_NewEmail) at AccountFileMenuActions.pcf: line 35, column 72
    function visible_6 () : java.lang.Boolean {
      return account.AccountStatus != AccountStatus.TC_WITHDRAWN
    }
    
    // 'visible' attribute on MenuItem (id=AccountFileMenuActions_NewSubmission) at AccountFileMenuActions.pcf: line 41, column 49
    function visible_9 () : java.lang.Boolean {
      return account.NewSubmissionVisible
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    function updateAccountStatusAndCommit(newStatus : AccountStatus) {
      gw.transaction.Transaction.runWithNewBundle(\ bundle -> {
        var localAccount = bundle.add(account)
        localAccount.AccountStatus = newStatus
      })
    }
    
    
  }
  
  
}