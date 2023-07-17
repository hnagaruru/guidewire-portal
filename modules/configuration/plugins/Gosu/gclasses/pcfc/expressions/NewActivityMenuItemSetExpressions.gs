package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/NewActivityMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewActivityMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/NewActivityMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=item) at NewActivityMenuItemSet.pcf: line 30, column 121
    function action_0 () : void {
      gw.web.activity.NewActivityMenuUIHelper.goInWorkspace(account, policy, policyPeriod, pattern)
    }
    
    // 'label' attribute on MenuItem (id=item) at NewActivityMenuItemSet.pcf: line 30, column 121
    function label_1 () : java.lang.Object {
      return pattern.Subject == null ? DisplayKey.get("Java.NewActivity.NoSubject") : pattern.Subject
    }
    
    property get pattern () : entity.ActivityPattern {
      return getIteratedValue(2) as entity.ActivityPattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/activity/NewActivityMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NewActivityMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on MenuItem (id=NewActivityMenuItemSet_Category) at NewActivityMenuItemSet.pcf: line 22, column 149
    function label_3 () : java.lang.Object {
      return categoryMenuItem.Category == null ? DisplayKey.get("Java.NewActivity.NoCategory") : categoryMenuItem.Category.DisplayName
    }
    
    // 'value' attribute on MenuItemIterator at NewActivityMenuItemSet.pcf: line 26, column 48
    function value_2 () : entity.ActivityPattern[] {
      return categoryMenuItem.Patterns.where(\ pat -> not pat.AutomatedOnly)
    }
    
    property get categoryMenuItem () : gw.api.activity.ActivityPatternMenuCategory {
      return getIteratedValue(1) as gw.api.activity.ActivityPatternMenuCategory
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/activity/NewActivityMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewActivityMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on MenuItemIterator at NewActivityMenuItemSet.pcf: line 19, column 65
    function value_4 () : gw.api.activity.ActivityPatternMenuCategory[] {
      return gw.web.activity.NewActivityMenuUIHelper.createMenuItems(account, policy, policyPeriod)
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get policy () : Policy {
      return getRequireValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setRequireValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}