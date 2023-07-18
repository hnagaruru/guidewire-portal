package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCEmpLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class WCEmpLiabCov extends entity.WorkersCompCov {
  protected WCEmpLiabCov()  {
    super((java.lang.Void)null);
  }
  
  public WCEmpLiabCov(entity.PolicyPeriod branch)  {
    super(branch, "WCEmpLiabCov");
  }
  
  public WCEmpLiabCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "WCEmpLiabCov");
  }
  
  public boolean getHasWCEmpLiabLimitTerm() {
    return hasCovTerm("WCEmpLiabLimit");
  }
  
  public boolean getHasWCIncludedMonopolisticStatesTerm() {
    return hasCovTerm("WCIncludedMonopolisticStates");
  }
  
  public boolean getHasWCStopGapOptTerm() {
    return hasCovTerm("WCStopGapOpt");
  }
  
  public productmodel.PackageWCEmpLiabLimitType getWCEmpLiabLimitTerm() {
    return (productmodel.PackageWCEmpLiabLimitType)getCovTerm("WCEmpLiabLimit");
  }
  
  public productmodel.GenericWCIncludedMonopolisticStatesType getWCIncludedMonopolisticStatesTerm() {
    return (productmodel.GenericWCIncludedMonopolisticStatesType)getCovTerm("WCIncludedMonopolisticStates");
  }
  
  public productmodel.TypekeyWCStopGapOptType getWCStopGapOptTerm() {
    return (productmodel.TypekeyWCStopGapOptType)getCovTerm("WCStopGapOpt");
  }
  
  static {
    com.guidewire._generated.productmodel.WCEmpLiabCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.WCEmpLiabCov>() {
      public productmodel.WCEmpLiabCov newEmptyInstance() {
        return new productmodel.WCEmpLiabCov();
      }
      
      
    });
  }
}