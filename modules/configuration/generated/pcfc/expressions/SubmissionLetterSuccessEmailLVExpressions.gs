package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionLetterSuccessEmailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionLetterSuccessEmailLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionLetterSuccessEmailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SubmissionLetterSuccessEmailLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at SubmissionLetterSuccessEmailLV.pcf: line 26, column 43
    function valueRoot_5 () : java.lang.Object {
      return producer
    }
    
    // 'value' attribute on TextCell (id=Email1_Cell) at SubmissionLetterSuccessEmailLV.pcf: line 31, column 51
    function valueRoot_8 () : java.lang.Object {
      return producer.Contact
    }
    
    // 'value' attribute on TextCell (id=Email2_Cell) at SubmissionLetterSuccessEmailLV.pcf: line 36, column 51
    function value_10 () : java.lang.String {
      return producer.Contact.EmailAddress2
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at SubmissionLetterSuccessEmailLV.pcf: line 26, column 43
    function value_4 () : entity.UserContact {
      return producer.Contact
    }
    
    // 'value' attribute on TextCell (id=Email1_Cell) at SubmissionLetterSuccessEmailLV.pcf: line 31, column 51
    function value_7 () : java.lang.String {
      return producer.Contact.EmailAddress1
    }
    
    property get producer () : entity.User {
      return getIteratedValue(1) as entity.User
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/submgr/SubmissionLetterSuccessEmailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionLetterSuccessEmailLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at SubmissionLetterSuccessEmailLV.pcf: line 13, column 28
    function initialValue_0 () : Submission[] {
      return Job.finder.findSelectedSubmissionsByAccount(account).toCollection().toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at SubmissionLetterSuccessEmailLV.pcf: line 26, column 43
    function sortValue_1 (producer :  entity.User) : java.lang.Object {
      return producer.Contact
    }
    
    // 'value' attribute on TextCell (id=Email1_Cell) at SubmissionLetterSuccessEmailLV.pcf: line 31, column 51
    function sortValue_2 (producer :  entity.User) : java.lang.Object {
      return producer.Contact.EmailAddress1
    }
    
    // 'value' attribute on TextCell (id=Email2_Cell) at SubmissionLetterSuccessEmailLV.pcf: line 36, column 51
    function sortValue_3 (producer :  entity.User) : java.lang.Object {
      return producer.Contact.EmailAddress2
    }
    
    // 'value' attribute on RowIterator at SubmissionLetterSuccessEmailLV.pcf: line 19, column 33
    function value_13 () : entity.User[] {
      return AllProducers
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get submissions () : Submission[] {
      return getVariableValue("submissions", 0) as Submission[]
    }
    
    property set submissions ($arg :  Submission[]) {
      setVariableValue("submissions", 0, $arg)
    }
    
    property get AllProducers() : User[] {
          return submissions.arrays("RoleAssignments").toArray(new JobUserRoleAssignment[0])
                               .where( \ u -> u.Role == TC_PRODUCER and u.AssignedUser != null)
                               .map( \ u -> u.AssignedUser )
                               .toSet()?.toTypedArray()
      }
    
    
  }
  
  
}