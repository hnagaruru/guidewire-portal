package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAExcludeFedEmployeeUse.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAExcludeFedEmployeeUse extends entity.PersonalAutoExcl {
  protected PAExcludeFedEmployeeUse()  {
    super((java.lang.Void)null);
  }
  
  public PAExcludeFedEmployeeUse(entity.PolicyPeriod branch)  {
    super(branch, "PAExcludeFedEmployeeUse");
  }
  
  public PAExcludeFedEmployeeUse(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAExcludeFedEmployeeUse");
  }
  
  static {
    com.guidewire._generated.productmodel.PAExcludeFedEmployeeUseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAExcludeFedEmployeeUse>() {
      public productmodel.PAExcludeFedEmployeeUse newEmptyInstance() {
        return new productmodel.PAExcludeFedEmployeeUse();
      }
      
      
    });
  }
}