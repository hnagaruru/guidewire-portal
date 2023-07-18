package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_PA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_PA extends entity.PersonalAutoCov {
  protected PAPIP_PA()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_PA(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_PA");
  }
  
  public PAPIP_PA(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_PA");
  }
  
  public boolean getHasPAPIPPA_COMBINEDTerm() {
    return hasCovTerm("PAPIPPA_COMBINED");
  }
  
  public boolean getHasPAPIPPA_DEATHTerm() {
    return hasCovTerm("PAPIPPA_DEATH");
  }
  
  public boolean getHasPAPIPPA_EXTRAMEDTerm() {
    return hasCovTerm("PAPIPPA_EXTRAMED");
  }
  
  public boolean getHasPAPIPPA_FUNERALTerm() {
    return hasCovTerm("PAPIPPA_FUNERAL");
  }
  
  public boolean getHasPAPIPPA_INCOMETerm() {
    return hasCovTerm("PAPIPPA_INCOME");
  }
  
  public boolean getHasPAPIPPA_MEDICALTerm() {
    return hasCovTerm("PAPIPPA_MEDICAL");
  }
  
  public productmodel.OptionPAPIPPA_COMBINEDType getPAPIPPA_COMBINEDTerm() {
    return (productmodel.OptionPAPIPPA_COMBINEDType)getCovTerm("PAPIPPA_COMBINED");
  }
  
  public productmodel.OptionPAPIPPA_DEATHType getPAPIPPA_DEATHTerm() {
    return (productmodel.OptionPAPIPPA_DEATHType)getCovTerm("PAPIPPA_DEATH");
  }
  
  public productmodel.OptionPAPIPPA_EXTRAMEDType getPAPIPPA_EXTRAMEDTerm() {
    return (productmodel.OptionPAPIPPA_EXTRAMEDType)getCovTerm("PAPIPPA_EXTRAMED");
  }
  
  public productmodel.OptionPAPIPPA_FUNERALType getPAPIPPA_FUNERALTerm() {
    return (productmodel.OptionPAPIPPA_FUNERALType)getCovTerm("PAPIPPA_FUNERAL");
  }
  
  public productmodel.PackagePAPIPPA_INCOMEType getPAPIPPA_INCOMETerm() {
    return (productmodel.PackagePAPIPPA_INCOMEType)getCovTerm("PAPIPPA_INCOME");
  }
  
  public productmodel.OptionPAPIPPA_MEDICALType getPAPIPPA_MEDICALTerm() {
    return (productmodel.OptionPAPIPPA_MEDICALType)getCovTerm("PAPIPPA_MEDICAL");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_PAInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_PA>() {
      public productmodel.PAPIP_PA newEmptyInstance() {
        return new productmodel.PAPIP_PA();
      }
      
      
    });
  }
}