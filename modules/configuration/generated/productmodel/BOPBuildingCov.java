package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBuildingCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPBuildingCov extends entity.BOPBuildingCov {
  protected BOPBuildingCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPBuildingCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPBuildingCov");
  }
  
  public BOPBuildingCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPBuildingCov");
  }
  
  public productmodel.OptionBOPBldgAnnualIncreaseType getBOPBldgAnnualIncreaseTerm() {
    return (productmodel.OptionBOPBldgAnnualIncreaseType)getCovTerm("BOPBldgAnnualIncrease");
  }
  
  public productmodel.DirectBOPBldgLimType getBOPBldgLimTerm() {
    return (productmodel.DirectBOPBldgLimType)getCovTerm("BOPBldgLim");
  }
  
  public productmodel.TypekeyBOPBldgValuationType getBOPBldgValuationTerm() {
    return (productmodel.TypekeyBOPBldgValuationType)getCovTerm("BOPBldgValuation");
  }
  
  public productmodel.OptionBOPBuildingCoinType getBOPBuildingCoinTerm() {
    return (productmodel.OptionBOPBuildingCoinType)getCovTerm("BOPBuildingCoin");
  }
  
  public boolean getHasBOPBldgAnnualIncreaseTerm() {
    return hasCovTerm("BOPBldgAnnualIncrease");
  }
  
  public boolean getHasBOPBldgLimTerm() {
    return hasCovTerm("BOPBldgLim");
  }
  
  public boolean getHasBOPBldgValuationTerm() {
    return hasCovTerm("BOPBldgValuation");
  }
  
  public boolean getHasBOPBuildingCoinTerm() {
    return hasCovTerm("BOPBuildingCoin");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPBuildingCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPBuildingCov>() {
      public productmodel.BOPBuildingCov newEmptyInstance() {
        return new productmodel.BOPBuildingCov();
      }
      
      
    });
  }
}