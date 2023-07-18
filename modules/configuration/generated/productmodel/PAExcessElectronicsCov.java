package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAExcessElectronicsCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAExcessElectronicsCov extends entity.PersonalVehicleCov {
  protected PAExcessElectronicsCov()  {
    super((java.lang.Void)null);
  }
  
  public PAExcessElectronicsCov(entity.PolicyPeriod branch)  {
    super(branch, "PAExcessElectronicsCov");
  }
  
  public PAExcessElectronicsCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAExcessElectronicsCov");
  }
  
  public boolean getHasPAExcessElectronicsLimitTerm() {
    return hasCovTerm("PAExcessElectronicsLimit");
  }
  
  public productmodel.OptionPAExcessElectronicsLimitType getPAExcessElectronicsLimitTerm() {
    return (productmodel.OptionPAExcessElectronicsLimitType)getCovTerm("PAExcessElectronicsLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.PAExcessElectronicsCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAExcessElectronicsCov>() {
      public productmodel.PAExcessElectronicsCov newEmptyInstance() {
        return new productmodel.PAExcessElectronicsCov();
      }
      
      
    });
  }
}