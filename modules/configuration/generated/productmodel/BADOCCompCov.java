package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADOCCompCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BADOCCompCov extends entity.BusinessAutoCov {
  protected BADOCCompCov()  {
    super((java.lang.Void)null);
  }
  
  public BADOCCompCov(entity.PolicyPeriod branch)  {
    super(branch, "BADOCCompCov");
  }
  
  public BADOCCompCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BADOCCompCov");
  }
  
  public productmodel.OptionBADOCCompDeductType getBADOCCompDeductTerm() {
    return (productmodel.OptionBADOCCompDeductType)getCovTerm("BADOCCompDeduct");
  }
  
  public boolean getHasBADOCCompDeductTerm() {
    return hasCovTerm("BADOCCompDeduct");
  }
  
  static {
    com.guidewire._generated.productmodel.BADOCCompCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BADOCCompCov>() {
      public productmodel.BADOCCompCov newEmptyInstance() {
        return new productmodel.BADOCCompCov();
      }
      
      
    });
  }
}