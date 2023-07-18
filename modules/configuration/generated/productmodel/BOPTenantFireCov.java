package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPTenantFireCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPTenantFireCov extends entity.BusinessOwnersCov {
  protected BOPTenantFireCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPTenantFireCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPTenantFireCov");
  }
  
  public BOPTenantFireCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPTenantFireCov");
  }
  
  public productmodel.OptionBOPTenantsFireLiabBaseLimitType getBOPTenantsFireLiabBaseLimitTerm() {
    return (productmodel.OptionBOPTenantsFireLiabBaseLimitType)getCovTerm("BOPTenantsFireLiabBaseLimit");
  }
  
  public boolean getHasBOPTenantsFireLiabBaseLimitTerm() {
    return hasCovTerm("BOPTenantsFireLiabBaseLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPTenantFireCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPTenantFireCov>() {
      public productmodel.BOPTenantFireCov newEmptyInstance() {
        return new productmodel.BOPTenantFireCov();
      }
      
      
    });
  }
}