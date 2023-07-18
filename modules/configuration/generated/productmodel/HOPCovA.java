package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPCovA extends entity.HOPDwellingCov {
  protected HOPCovA()  {
    super((java.lang.Void)null);
  }
  
  public HOPCovA(entity.PolicyPeriod branch)  {
    super(branch, "zl4i2neakg3g4ecg0t01bj445va");
  }
  
  public HOPCovA(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zl4i2neakg3g4ecg0t01bj445va");
  }
  
  public productmodel.OptionHOPCovACauseOfLossType getHOPCovACauseOfLossTerm() {
    return (productmodel.OptionHOPCovACauseOfLossType)getCovTerm("zc2j8chomjs3adiai3m74vl50ra");
  }
  
  public productmodel.OptionHOPCovACoinsuranceType getHOPCovACoinsuranceTerm() {
    return (productmodel.OptionHOPCovACoinsuranceType)getCovTerm("zqlg02is5fdfeekq2kuu8vnem79");
  }
  
  public productmodel.DirectHOPCovALimitType getHOPCovALimitTerm() {
    return (productmodel.DirectHOPCovALimitType)getCovTerm("zuhhq4ac7p78j6bt9u6gapf92o9");
  }
  
  public productmodel.OptionHOPCovAValuationType getHOPCovAValuationTerm() {
    return (productmodel.OptionHOPCovAValuationType)getCovTerm("z8ugc5n3dv8bu7pbhkkbeiv23s9");
  }
  
  public boolean getHasHOPCovACauseOfLossTerm() {
    return hasCovTerm("zc2j8chomjs3adiai3m74vl50ra");
  }
  
  public boolean getHasHOPCovACoinsuranceTerm() {
    return hasCovTerm("zqlg02is5fdfeekq2kuu8vnem79");
  }
  
  public boolean getHasHOPCovALimitTerm() {
    return hasCovTerm("zuhhq4ac7p78j6bt9u6gapf92o9");
  }
  
  public boolean getHasHOPCovAValuationTerm() {
    return hasCovTerm("z8ugc5n3dv8bu7pbhkkbeiv23s9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPCovAInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPCovA>() {
      public productmodel.HOPCovA newEmptyInstance() {
        return new productmodel.HOPCovA();
      }
      
      
    });
  }
}