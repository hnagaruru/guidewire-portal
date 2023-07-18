package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPSpoilageCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPSpoilageCov extends entity.BOPLocationCov {
  protected BOPSpoilageCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPSpoilageCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPSpoilageCov");
  }
  
  public BOPSpoilageCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPSpoilageCov");
  }
  
  public productmodel.GenericBOPBreakContamType getBOPBreakContamTerm() {
    return (productmodel.GenericBOPBreakContamType)getCovTerm("BOPBreakContam");
  }
  
  public productmodel.GenericBOPFridgeMaintenanceType getBOPFridgeMaintenanceTerm() {
    return (productmodel.GenericBOPFridgeMaintenanceType)getCovTerm("BOPFridgeMaintenance");
  }
  
  public productmodel.GenericBOPPowerOutageType getBOPPowerOutageTerm() {
    return (productmodel.GenericBOPPowerOutageType)getCovTerm("BOPPowerOutage");
  }
  
  public productmodel.GenericBOPSpoilageCovDescriptionType getBOPSpoilageCovDescriptionTerm() {
    return (productmodel.GenericBOPSpoilageCovDescriptionType)getCovTerm("BOPSpoilageCovDescription");
  }
  
  public productmodel.OptionBOPSpoilageDedType getBOPSpoilageDedTerm() {
    return (productmodel.OptionBOPSpoilageDedType)getCovTerm("BOPSpoilageDed");
  }
  
  public productmodel.DirectBOPSpoilageLimType getBOPSpoilageLimTerm() {
    return (productmodel.DirectBOPSpoilageLimType)getCovTerm("BOPSpoilageLim");
  }
  
  public boolean getHasBOPBreakContamTerm() {
    return hasCovTerm("BOPBreakContam");
  }
  
  public boolean getHasBOPFridgeMaintenanceTerm() {
    return hasCovTerm("BOPFridgeMaintenance");
  }
  
  public boolean getHasBOPPowerOutageTerm() {
    return hasCovTerm("BOPPowerOutage");
  }
  
  public boolean getHasBOPSpoilageCovDescriptionTerm() {
    return hasCovTerm("BOPSpoilageCovDescription");
  }
  
  public boolean getHasBOPSpoilageDedTerm() {
    return hasCovTerm("BOPSpoilageDed");
  }
  
  public boolean getHasBOPSpoilageLimTerm() {
    return hasCovTerm("BOPSpoilageLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPSpoilageCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPSpoilageCov>() {
      public productmodel.BOPSpoilageCov newEmptyInstance() {
        return new productmodel.BOPSpoilageCov();
      }
      
      
    });
  }
}