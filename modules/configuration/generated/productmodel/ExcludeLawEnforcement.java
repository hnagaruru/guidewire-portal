package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeLawEnforcement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeLawEnforcement extends entity.GeneralLiabilityExcl {
  protected ExcludeLawEnforcement()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeLawEnforcement(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeLawEnforcement");
  }
  
  public ExcludeLawEnforcement(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeLawEnforcement");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeLawEnforcementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeLawEnforcement>() {
      public productmodel.ExcludeLawEnforcement newEmptyInstance() {
        return new productmodel.ExcludeLawEnforcement();
      }
      
      
    });
  }
}