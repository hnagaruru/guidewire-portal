package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludePollutionXHostileFire.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludePollutionXHostileFire extends entity.GeneralLiabilityExcl {
  protected ExcludePollutionXHostileFire()  {
    super((java.lang.Void)null);
  }
  
  public ExcludePollutionXHostileFire(entity.PolicyPeriod branch)  {
    super(branch, "ExcludePollutionXHostileFire");
  }
  
  public ExcludePollutionXHostileFire(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludePollutionXHostileFire");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludePollutionXHostileFireInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludePollutionXHostileFire>() {
      public productmodel.ExcludePollutionXHostileFire newEmptyInstance() {
        return new productmodel.ExcludePollutionXHostileFire();
      }
      
      
    });
  }
}