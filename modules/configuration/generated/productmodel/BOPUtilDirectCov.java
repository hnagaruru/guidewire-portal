package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPUtilDirectCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPUtilDirectCov extends entity.BOPBuildingCov {
  protected BOPUtilDirectCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPUtilDirectCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPUtilDirectCov");
  }
  
  public BOPUtilDirectCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPUtilDirectCov");
  }
  
  public productmodel.GenericBOPUtilDirectCommOHType getBOPUtilDirectCommOHTerm() {
    return (productmodel.GenericBOPUtilDirectCommOHType)getCovTerm("BOPUtilDirectCommOH");
  }
  
  public productmodel.GenericBOPUtilDirectCommType getBOPUtilDirectCommTerm() {
    return (productmodel.GenericBOPUtilDirectCommType)getCovTerm("BOPUtilDirectComm");
  }
  
  public productmodel.DirectBOPUtilDirectLimType getBOPUtilDirectLimTerm() {
    return (productmodel.DirectBOPUtilDirectLimType)getCovTerm("BOPUtilDirectLim");
  }
  
  public productmodel.GenericBOPUtilDirectPowerOHType getBOPUtilDirectPowerOHTerm() {
    return (productmodel.GenericBOPUtilDirectPowerOHType)getCovTerm("BOPUtilDirectPowerOH");
  }
  
  public productmodel.GenericBOPUtilDirectPowerType getBOPUtilDirectPowerTerm() {
    return (productmodel.GenericBOPUtilDirectPowerType)getCovTerm("BOPUtilDirectPower");
  }
  
  public productmodel.GenericBOPUtilDirectWaterType getBOPUtilDirectWaterTerm() {
    return (productmodel.GenericBOPUtilDirectWaterType)getCovTerm("BOPUtilDirectWater");
  }
  
  public boolean getHasBOPUtilDirectCommOHTerm() {
    return hasCovTerm("BOPUtilDirectCommOH");
  }
  
  public boolean getHasBOPUtilDirectCommTerm() {
    return hasCovTerm("BOPUtilDirectComm");
  }
  
  public boolean getHasBOPUtilDirectLimTerm() {
    return hasCovTerm("BOPUtilDirectLim");
  }
  
  public boolean getHasBOPUtilDirectPowerOHTerm() {
    return hasCovTerm("BOPUtilDirectPowerOH");
  }
  
  public boolean getHasBOPUtilDirectPowerTerm() {
    return hasCovTerm("BOPUtilDirectPower");
  }
  
  public boolean getHasBOPUtilDirectWaterTerm() {
    return hasCovTerm("BOPUtilDirectWater");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPUtilDirectCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPUtilDirectCov>() {
      public productmodel.BOPUtilDirectCov newEmptyInstance() {
        return new productmodel.BOPUtilDirectCov();
      }
      
      
    });
  }
}