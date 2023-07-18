package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PALossOfUseCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PALossOfUseCov extends entity.PersonalAutoCov {
  protected PALossOfUseCov()  {
    super((java.lang.Void)null);
  }
  
  public PALossOfUseCov(entity.PolicyPeriod branch)  {
    super(branch, "PALossOfUseCov");
  }
  
  public PALossOfUseCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PALossOfUseCov");
  }
  
  public boolean getHasPARentalLossOfUseLimitTerm() {
    return hasCovTerm("PARentalLossOfUseLimit");
  }
  
  public productmodel.OptionPARentalLossOfUseLimitType getPARentalLossOfUseLimitTerm() {
    return (productmodel.OptionPARentalLossOfUseLimitType)getCovTerm("PARentalLossOfUseLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.PALossOfUseCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PALossOfUseCov>() {
      public productmodel.PALossOfUseCov newEmptyInstance() {
        return new productmodel.PALossOfUseCov();
      }
      
      
    });
  }
}