package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludePollutionXHeatHostileFire.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludePollutionXHeatHostileFire extends entity.GeneralLiabilityExcl {
  protected ExcludePollutionXHeatHostileFire()  {
    super((java.lang.Void)null);
  }
  
  public ExcludePollutionXHeatHostileFire(entity.PolicyPeriod branch)  {
    super(branch, "ExcludePollutionXHeatHostileFire");
  }
  
  public ExcludePollutionXHeatHostileFire(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludePollutionXHeatHostileFire");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludePollutionXHeatHostileFireInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludePollutionXHeatHostileFire>() {
      public productmodel.ExcludePollutionXHeatHostileFire newEmptyInstance() {
        return new productmodel.ExcludePollutionXHeatHostileFire();
      }
      
      
    });
  }
}