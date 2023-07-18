package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ClaimsMadeSupplementalRptng.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ClaimsMadeSupplementalRptng extends entity.GeneralLiabilityCond {
  protected ClaimsMadeSupplementalRptng()  {
    super((java.lang.Void)null);
  }
  
  public ClaimsMadeSupplementalRptng(entity.PolicyPeriod branch)  {
    super(branch, "ClaimsMadeSupplementalRptng");
  }
  
  public ClaimsMadeSupplementalRptng(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ClaimsMadeSupplementalRptng");
  }
  
  public boolean getHasSupplementalReportingTypeTerm() {
    return hasCovTerm("SupplementalReportingType");
  }
  
  public productmodel.TypekeySupplementalReportingTypeType getSupplementalReportingTypeTerm() {
    return (productmodel.TypekeySupplementalReportingTypeType)getCovTerm("SupplementalReportingType");
  }
  
  static {
    com.guidewire._generated.productmodel.ClaimsMadeSupplementalRptngInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ClaimsMadeSupplementalRptng>() {
      public productmodel.ClaimsMadeSupplementalRptng newEmptyInstance() {
        return new productmodel.ClaimsMadeSupplementalRptng();
      }
      
      
    });
  }
}