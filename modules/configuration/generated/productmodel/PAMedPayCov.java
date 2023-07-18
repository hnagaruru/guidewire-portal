package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAMedPayCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAMedPayCov extends entity.PersonalAutoCov {
  protected PAMedPayCov()  {
    super((java.lang.Void)null);
  }
  
  public PAMedPayCov(entity.PolicyPeriod branch)  {
    super(branch, "PAMedPayCov");
  }
  
  public PAMedPayCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAMedPayCov");
  }
  
  public boolean getHasPAMedLimitTerm() {
    return hasCovTerm("PAMedLimit");
  }
  
  public boolean getHasPAMedPayCoordinateBeneTerm() {
    return hasCovTerm("PAMedPayCoordinateBene");
  }
  
  public productmodel.OptionPAMedLimitType getPAMedLimitTerm() {
    return (productmodel.OptionPAMedLimitType)getCovTerm("PAMedLimit");
  }
  
  public productmodel.GenericPAMedPayCoordinateBeneType getPAMedPayCoordinateBeneTerm() {
    return (productmodel.GenericPAMedPayCoordinateBeneType)getCovTerm("PAMedPayCoordinateBene");
  }
  
  static {
    com.guidewire._generated.productmodel.PAMedPayCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAMedPayCov>() {
      public productmodel.PAMedPayCov newEmptyInstance() {
        return new productmodel.PAMedPayCov();
      }
      
      
    });
  }
}