package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BANonownedLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BANonownedLiabCov extends entity.BusinessAutoCov {
  protected BANonownedLiabCov()  {
    super((java.lang.Void)null);
  }
  
  public BANonownedLiabCov(entity.PolicyPeriod branch)  {
    super(branch, "BANonownedLiabCov");
  }
  
  public BANonownedLiabCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BANonownedLiabCov");
  }
  
  public productmodel.PackageBANonownedLiabBIType getBANonownedLiabBITerm() {
    return (productmodel.PackageBANonownedLiabBIType)getCovTerm("BANonownedLiabBI");
  }
  
  public boolean getHasBANonownedLiabBITerm() {
    return hasCovTerm("BANonownedLiabBI");
  }
  
  static {
    com.guidewire._generated.productmodel.BANonownedLiabCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BANonownedLiabCov>() {
      public productmodel.BANonownedLiabCov newEmptyInstance() {
        return new productmodel.BANonownedLiabCov();
      }
      
      
    });
  }
}