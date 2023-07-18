package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPUtilTimeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPUtilTimeCov extends entity.BOPBuildingCov {
  protected BOPUtilTimeCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPUtilTimeCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPUtilTimeCov");
  }
  
  public BOPUtilTimeCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPUtilTimeCov");
  }
  
  public productmodel.GenericBOPUtilTimeCommOHType getBOPUtilTimeCommOHTerm() {
    return (productmodel.GenericBOPUtilTimeCommOHType)getCovTerm("BOPUtilTimeCommOH");
  }
  
  public productmodel.GenericBOPUtilTimeCommType getBOPUtilTimeCommTerm() {
    return (productmodel.GenericBOPUtilTimeCommType)getCovTerm("BOPUtilTimeComm");
  }
  
  public productmodel.DirectBOPUtilTimeLimType getBOPUtilTimeLimTerm() {
    return (productmodel.DirectBOPUtilTimeLimType)getCovTerm("BOPUtilTimeLim");
  }
  
  public productmodel.GenericBOPUtilTimePowerOHType getBOPUtilTimePowerOHTerm() {
    return (productmodel.GenericBOPUtilTimePowerOHType)getCovTerm("BOPUtilTimePowerOH");
  }
  
  public productmodel.GenericBOPUtilTimePowerType getBOPUtilTimePowerTerm() {
    return (productmodel.GenericBOPUtilTimePowerType)getCovTerm("BOPUtilTimePower");
  }
  
  public productmodel.GenericBOPUtilTimeWaterType getBOPUtilTimeWaterTerm() {
    return (productmodel.GenericBOPUtilTimeWaterType)getCovTerm("BOPUtilTimeWater");
  }
  
  public boolean getHasBOPUtilTimeCommOHTerm() {
    return hasCovTerm("BOPUtilTimeCommOH");
  }
  
  public boolean getHasBOPUtilTimeCommTerm() {
    return hasCovTerm("BOPUtilTimeComm");
  }
  
  public boolean getHasBOPUtilTimeLimTerm() {
    return hasCovTerm("BOPUtilTimeLim");
  }
  
  public boolean getHasBOPUtilTimePowerOHTerm() {
    return hasCovTerm("BOPUtilTimePowerOH");
  }
  
  public boolean getHasBOPUtilTimePowerTerm() {
    return hasCovTerm("BOPUtilTimePower");
  }
  
  public boolean getHasBOPUtilTimeWaterTerm() {
    return hasCovTerm("BOPUtilTimeWater");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPUtilTimeCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPUtilTimeCov>() {
      public productmodel.BOPUtilTimeCov newEmptyInstance() {
        return new productmodel.BOPUtilTimeCov();
      }
      
      
    });
  }
}