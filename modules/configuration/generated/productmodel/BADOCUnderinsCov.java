package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADOCUnderinsCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BADOCUnderinsCov extends entity.BusinessAutoCov {
  protected BADOCUnderinsCov()  {
    super((java.lang.Void)null);
  }
  
  public BADOCUnderinsCov(entity.PolicyPeriod branch)  {
    super(branch, "BADOCUnderinsCov");
  }
  
  public BADOCUnderinsCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BADOCUnderinsCov");
  }
  
  public productmodel.PackageBADOCUnderinsBIType getBADOCUnderinsBITerm() {
    return (productmodel.PackageBADOCUnderinsBIType)getCovTerm("BADOCUnderinsBI");
  }
  
  public boolean getHasBADOCUnderinsBITerm() {
    return hasCovTerm("BADOCUnderinsBI");
  }
  
  static {
    com.guidewire._generated.productmodel.BADOCUnderinsCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BADOCUnderinsCov>() {
      public productmodel.BADOCUnderinsCov newEmptyInstance() {
        return new productmodel.BADOCUnderinsCov();
      }
      
      
    });
  }
}