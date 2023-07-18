package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADOCMedPayCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BADOCMedPayCov extends entity.BusinessAutoCov {
  protected BADOCMedPayCov()  {
    super((java.lang.Void)null);
  }
  
  public BADOCMedPayCov(entity.PolicyPeriod branch)  {
    super(branch, "BADOCMedPayCov");
  }
  
  public BADOCMedPayCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BADOCMedPayCov");
  }
  
  public productmodel.OptionBADOCMedPayLimitType getBADOCMedPayLimitTerm() {
    return (productmodel.OptionBADOCMedPayLimitType)getCovTerm("BADOCMedPayLimit");
  }
  
  public boolean getHasBADOCMedPayLimitTerm() {
    return hasCovTerm("BADOCMedPayLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BADOCMedPayCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BADOCMedPayCov>() {
      public productmodel.BADOCMedPayCov newEmptyInstance() {
        return new productmodel.BADOCMedPayCov();
      }
      
      
    });
  }
}