package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeEmployeesAsInsureds.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeEmployeesAsInsureds extends entity.GeneralLiabilityExcl {
  protected ExcludeEmployeesAsInsureds()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeEmployeesAsInsureds(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeEmployeesAsInsureds");
  }
  
  public ExcludeEmployeesAsInsureds(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeEmployeesAsInsureds");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeEmployeesAsInsuredsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeEmployeesAsInsureds>() {
      public productmodel.ExcludeEmployeesAsInsureds newEmptyInstance() {
        return new productmodel.ExcludeEmployeesAsInsureds();
      }
      
      
    });
  }
}