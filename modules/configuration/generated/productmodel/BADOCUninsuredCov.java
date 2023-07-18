package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADOCUninsuredCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BADOCUninsuredCov extends entity.BusinessAutoCov {
  protected BADOCUninsuredCov()  {
    super((java.lang.Void)null);
  }
  
  public BADOCUninsuredCov(entity.PolicyPeriod branch)  {
    super(branch, "BADOCUninsuredCov");
  }
  
  public BADOCUninsuredCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BADOCUninsuredCov");
  }
  
  public productmodel.PackageBADOCUninsuredBIType getBADOCUninsuredBITerm() {
    return (productmodel.PackageBADOCUninsuredBIType)getCovTerm("BADOCUninsuredBI");
  }
  
  public boolean getHasBADOCUninsuredBITerm() {
    return hasCovTerm("BADOCUninsuredBI");
  }
  
  static {
    com.guidewire._generated.productmodel.BADOCUninsuredCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BADOCUninsuredCov>() {
      public productmodel.BADOCUninsuredCov newEmptyInstance() {
        return new productmodel.BADOCUninsuredCov();
      }
      
      
    });
  }
}