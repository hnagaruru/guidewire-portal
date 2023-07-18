package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPropertyCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPPropertyCov extends entity.BusinessOwnersCov {
  protected BOPPropertyCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPPropertyCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPPropertyCov");
  }
  
  public BOPPropertyCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPPropertyCov");
  }
  
  public productmodel.OptionBOPBaseDedType getBOPBaseDedTerm() {
    return (productmodel.OptionBOPBaseDedType)getCovTerm("BOPBaseDed");
  }
  
  public productmodel.OptionBOPGlassDedType getBOPGlassDedTerm() {
    return (productmodel.OptionBOPGlassDedType)getCovTerm("BOPGlassDed");
  }
  
  public productmodel.OptionBOPOptCovDedType getBOPOptCovDedTerm() {
    return (productmodel.OptionBOPOptCovDedType)getCovTerm("BOPOptCovDed");
  }
  
  public productmodel.OptionBOPPropBuildDedType getBOPPropBuildDedTerm() {
    return (productmodel.OptionBOPPropBuildDedType)getCovTerm("BOPPropBuildDed");
  }
  
  public productmodel.TypekeyBOPPropertyCovCauseOfLossType getBOPPropertyCovCauseOfLossTerm() {
    return (productmodel.TypekeyBOPPropertyCovCauseOfLossType)getCovTerm("BOPPropertyCovCauseOfLoss");
  }
  
  public boolean getHasBOPBaseDedTerm() {
    return hasCovTerm("BOPBaseDed");
  }
  
  public boolean getHasBOPGlassDedTerm() {
    return hasCovTerm("BOPGlassDed");
  }
  
  public boolean getHasBOPOptCovDedTerm() {
    return hasCovTerm("BOPOptCovDed");
  }
  
  public boolean getHasBOPPropBuildDedTerm() {
    return hasCovTerm("BOPPropBuildDed");
  }
  
  public boolean getHasBOPPropertyCovCauseOfLossTerm() {
    return hasCovTerm("BOPPropertyCovCauseOfLoss");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPPropertyCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPPropertyCov>() {
      public productmodel.BOPPropertyCov newEmptyInstance() {
        return new productmodel.BOPPropertyCov();
      }
      
      
    });
  }
}