package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPersonalPropCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPPersonalPropCov extends entity.BOPBuildingCov {
  protected BOPPersonalPropCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPPersonalPropCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPPersonalPropCov");
  }
  
  public BOPPersonalPropCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPPersonalPropCov");
  }
  
  public productmodel.DirectBOPBPPBldgLimType getBOPBPPBldgLimTerm() {
    return (productmodel.DirectBOPBPPBldgLimType)getCovTerm("BOPBPPBldgLim");
  }
  
  public productmodel.TypekeyBOPBPPValuationType getBOPBPPValuationTerm() {
    return (productmodel.TypekeyBOPBPPValuationType)getCovTerm("BOPBPPValuation");
  }
  
  public productmodel.OptionBOPPersonalPropCoinType getBOPPersonalPropCoinTerm() {
    return (productmodel.OptionBOPPersonalPropCoinType)getCovTerm("BOPPersonalPropCoin");
  }
  
  public boolean getHasBOPBPPBldgLimTerm() {
    return hasCovTerm("BOPBPPBldgLim");
  }
  
  public boolean getHasBOPBPPValuationTerm() {
    return hasCovTerm("BOPBPPValuation");
  }
  
  public boolean getHasBOPPersonalPropCoinTerm() {
    return hasCovTerm("BOPPersonalPropCoin");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPPersonalPropCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPPersonalPropCov>() {
      public productmodel.BOPPersonalPropCov newEmptyInstance() {
        return new productmodel.BOPPersonalPropCov();
      }
      
      
    });
  }
}