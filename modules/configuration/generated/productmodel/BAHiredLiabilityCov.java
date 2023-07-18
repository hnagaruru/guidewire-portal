package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAHiredLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAHiredLiabilityCov extends entity.BusinessAutoCov {
  protected BAHiredLiabilityCov()  {
    super((java.lang.Void)null);
  }
  
  public BAHiredLiabilityCov(entity.PolicyPeriod branch)  {
    super(branch, "BAHiredLiabilityCov");
  }
  
  public BAHiredLiabilityCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAHiredLiabilityCov");
  }
  
  public productmodel.PackageBAHiredLiabilityBIType getBAHiredLiabilityBITerm() {
    return (productmodel.PackageBAHiredLiabilityBIType)getCovTerm("BAHiredLiabilityBI");
  }
  
  public boolean getHasBAHiredLiabilityBITerm() {
    return hasCovTerm("BAHiredLiabilityBI");
  }
  
  static {
    com.guidewire._generated.productmodel.BAHiredLiabilityCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAHiredLiabilityCov>() {
      public productmodel.BAHiredLiabilityCov newEmptyInstance() {
        return new productmodel.BAHiredLiabilityCov();
      }
      
      
    });
  }
}