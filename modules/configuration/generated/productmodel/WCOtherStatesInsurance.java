package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCOtherStatesInsurance.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class WCOtherStatesInsurance extends entity.WorkersCompCov {
  protected WCOtherStatesInsurance()  {
    super((java.lang.Void)null);
  }
  
  public WCOtherStatesInsurance(entity.PolicyPeriod branch)  {
    super(branch, "WCOtherStatesInsurance");
  }
  
  public WCOtherStatesInsurance(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "WCOtherStatesInsurance");
  }
  
  public boolean getHasWCExcludedStatesTerm() {
    return hasCovTerm("WCExcludedStates");
  }
  
  public boolean getHasWCIncludedStatesTerm() {
    return hasCovTerm("WCIncludedStates");
  }
  
  public boolean getHasWCOtherStatesOptTerm() {
    return hasCovTerm("WCOtherStatesOpt");
  }
  
  public productmodel.GenericWCExcludedStatesType getWCExcludedStatesTerm() {
    return (productmodel.GenericWCExcludedStatesType)getCovTerm("WCExcludedStates");
  }
  
  public productmodel.GenericWCIncludedStatesType getWCIncludedStatesTerm() {
    return (productmodel.GenericWCIncludedStatesType)getCovTerm("WCIncludedStates");
  }
  
  public productmodel.TypekeyWCOtherStatesOptType getWCOtherStatesOptTerm() {
    return (productmodel.TypekeyWCOtherStatesOptType)getCovTerm("WCOtherStatesOpt");
  }
  
  static {
    com.guidewire._generated.productmodel.WCOtherStatesInsuranceInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.WCOtherStatesInsurance>() {
      public productmodel.WCOtherStatesInsurance newEmptyInstance() {
        return new productmodel.WCOtherStatesInsurance();
      }
      
      
    });
  }
}