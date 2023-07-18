package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/PollutionBroadLimited.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PollutionBroadLimited extends entity.GeneralLiabilityCov {
  protected PollutionBroadLimited()  {
    super((java.lang.Void)null);
  }
  
  public PollutionBroadLimited(entity.PolicyPeriod branch)  {
    super(branch, "PollutionBroadLimited");
  }
  
  public PollutionBroadLimited(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PollutionBroadLimited");
  }
  
  public boolean getHasPollutionLimitTypeTerm() {
    return hasCovTerm("PollutionLimitType");
  }
  
  public boolean getHasPollutionSubLimitTerm() {
    return hasCovTerm("PollutionSubLimit");
  }
  
  public productmodel.OptionPollutionLimitTypeType getPollutionLimitTypeTerm() {
    return (productmodel.OptionPollutionLimitTypeType)getCovTerm("PollutionLimitType");
  }
  
  public productmodel.OptionPollutionSubLimitType getPollutionSubLimitTerm() {
    return (productmodel.OptionPollutionSubLimitType)getCovTerm("PollutionSubLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.PollutionBroadLimitedInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PollutionBroadLimited>() {
      public productmodel.PollutionBroadLimited newEmptyInstance() {
        return new productmodel.PollutionBroadLimited();
      }
      
      
    });
  }
}