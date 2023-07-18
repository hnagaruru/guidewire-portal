package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADOCLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BADOCLiabilityCov extends entity.BusinessAutoCov {
  protected BADOCLiabilityCov()  {
    super((java.lang.Void)null);
  }
  
  public BADOCLiabilityCov(entity.PolicyPeriod branch)  {
    super(branch, "BADOCLiabilityCov");
  }
  
  public BADOCLiabilityCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BADOCLiabilityCov");
  }
  
  public productmodel.PackageBADOCLiabilityLiabType getBADOCLiabilityLiabTerm() {
    return (productmodel.PackageBADOCLiabilityLiabType)getCovTerm("BADOCLiabilityLiab");
  }
  
  public boolean getHasBADOCLiabilityLiabTerm() {
    return hasCovTerm("BADOCLiabilityLiab");
  }
  
  static {
    com.guidewire._generated.productmodel.BADOCLiabilityCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BADOCLiabilityCov>() {
      public productmodel.BADOCLiabilityCov newEmptyInstance() {
        return new productmodel.BADOCLiabilityCov();
      }
      
      
    });
  }
}