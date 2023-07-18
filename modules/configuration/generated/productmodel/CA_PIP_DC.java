package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CA_PIP_DC.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CA_PIP_DC extends entity.BAStateCov {
  protected CA_PIP_DC()  {
    super((java.lang.Void)null);
  }
  
  public CA_PIP_DC(entity.PolicyPeriod branch)  {
    super(branch, "CA_PIP_DC");
  }
  
  public CA_PIP_DC(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CA_PIP_DC");
  }
  
  public productmodel.OptionBAPIP_DC_FuneralType getBAPIP_DC_FuneralTerm() {
    return (productmodel.OptionBAPIP_DC_FuneralType)getCovTerm("BAPIP_DC_Funeral");
  }
  
  public productmodel.OptionBAPIP_DC_MedicalType getBAPIP_DC_MedicalTerm() {
    return (productmodel.OptionBAPIP_DC_MedicalType)getCovTerm("BAPIP_DC_Medical");
  }
  
  public productmodel.OptionBAPIP_DC_WorkLossType getBAPIP_DC_WorkLossTerm() {
    return (productmodel.OptionBAPIP_DC_WorkLossType)getCovTerm("BAPIP_DC_WorkLoss");
  }
  
  public boolean getHasBAPIP_DC_FuneralTerm() {
    return hasCovTerm("BAPIP_DC_Funeral");
  }
  
  public boolean getHasBAPIP_DC_MedicalTerm() {
    return hasCovTerm("BAPIP_DC_Medical");
  }
  
  public boolean getHasBAPIP_DC_WorkLossTerm() {
    return hasCovTerm("BAPIP_DC_WorkLoss");
  }
  
  static {
    com.guidewire._generated.productmodel.CA_PIP_DCInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CA_PIP_DC>() {
      public productmodel.CA_PIP_DC newEmptyInstance() {
        return new productmodel.CA_PIP_DC();
      }
      
      
    });
  }
}