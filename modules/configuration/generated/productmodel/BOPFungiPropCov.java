package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPFungiPropCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPFungiPropCov extends entity.BusinessOwnersCov {
  protected BOPFungiPropCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPFungiPropCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPFungiPropCov");
  }
  
  public BOPFungiPropCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPFungiPropCov");
  }
  
  public productmodel.TypekeyBOPFungiAggLevelType getBOPFungiAggLevelTerm() {
    return (productmodel.TypekeyBOPFungiAggLevelType)getCovTerm("BOPFungiAggLevel");
  }
  
  public productmodel.DirectBOPFungiPropLimType getBOPFungiPropLimTerm() {
    return (productmodel.DirectBOPFungiPropLimType)getCovTerm("BOPFungiPropLim");
  }
  
  public productmodel.OptionBOPFungiTimeCovType getBOPFungiTimeCovTerm() {
    return (productmodel.OptionBOPFungiTimeCovType)getCovTerm("BOPFungiTimeCov");
  }
  
  public boolean getHasBOPFungiAggLevelTerm() {
    return hasCovTerm("BOPFungiAggLevel");
  }
  
  public boolean getHasBOPFungiPropLimTerm() {
    return hasCovTerm("BOPFungiPropLim");
  }
  
  public boolean getHasBOPFungiTimeCovTerm() {
    return hasCovTerm("BOPFungiTimeCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPFungiPropCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPFungiPropCov>() {
      public productmodel.BOPFungiPropCov newEmptyInstance() {
        return new productmodel.BOPFungiPropCov();
      }
      
      
    });
  }
}