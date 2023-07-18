package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPTenantsLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPTenantsLiabilityCov extends entity.BOPBuildingCov {
  protected BOPTenantsLiabilityCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPTenantsLiabilityCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPTenantsLiabilityCov");
  }
  
  public BOPTenantsLiabilityCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPTenantsLiabilityCov");
  }
  
  public productmodel.DirectBOPTenantsLiabLimType getBOPTenantsLiabLimTerm() {
    return (productmodel.DirectBOPTenantsLiabLimType)getCovTerm("BOPTenantsLiabLim");
  }
  
  public boolean getHasBOPTenantsLiabLimTerm() {
    return hasCovTerm("BOPTenantsLiabLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPTenantsLiabilityCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPTenantsLiabilityCov>() {
      public productmodel.BOPTenantsLiabilityCov newEmptyInstance() {
        return new productmodel.BOPTenantsLiabilityCov();
      }
      
      
    });
  }
}