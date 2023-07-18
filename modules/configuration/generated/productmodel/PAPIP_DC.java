package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_DC.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_DC extends entity.PersonalAutoCov {
  protected PAPIP_DC()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_DC(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_DC");
  }
  
  public PAPIP_DC(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_DC");
  }
  
  public boolean getHasPAPIP_DC_FuneralTerm() {
    return hasCovTerm("PAPIP_DC_Funeral");
  }
  
  public boolean getHasPAPIP_DC_MedicalTerm() {
    return hasCovTerm("PAPIP_DC_Medical");
  }
  
  public boolean getHasPAPIP_DC_WorkLossTerm() {
    return hasCovTerm("PAPIP_DC_WorkLoss");
  }
  
  public productmodel.OptionPAPIP_DC_FuneralType getPAPIP_DC_FuneralTerm() {
    return (productmodel.OptionPAPIP_DC_FuneralType)getCovTerm("PAPIP_DC_Funeral");
  }
  
  public productmodel.OptionPAPIP_DC_MedicalType getPAPIP_DC_MedicalTerm() {
    return (productmodel.OptionPAPIP_DC_MedicalType)getCovTerm("PAPIP_DC_Medical");
  }
  
  public productmodel.OptionPAPIP_DC_WorkLossType getPAPIP_DC_WorkLossTerm() {
    return (productmodel.OptionPAPIP_DC_WorkLossType)getCovTerm("PAPIP_DC_WorkLoss");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_DCInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_DC>() {
      public productmodel.PAPIP_DC newEmptyInstance() {
        return new productmodel.PAPIP_DC();
      }
      
      
    });
  }
}