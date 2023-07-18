package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_PA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_PA extends entity.BAStateCov {
  protected CAPIP_PA()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_PA(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_PA");
  }
  
  public CAPIP_PA(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_PA");
  }
  
  public boolean getHasPIPPA_COMBINEDTerm() {
    return hasCovTerm("PIPPA_COMBINED");
  }
  
  public boolean getHasPIPPA_DEATHTerm() {
    return hasCovTerm("PIPPA_DEATH");
  }
  
  public boolean getHasPIPPA_EXTRAMEDTerm() {
    return hasCovTerm("PIPPA_EXTRAMED");
  }
  
  public boolean getHasPIPPA_FUNERALTerm() {
    return hasCovTerm("PIPPA_FUNERAL");
  }
  
  public boolean getHasPIPPA_INCOMETerm() {
    return hasCovTerm("PIPPA_INCOME");
  }
  
  public boolean getHasPIPPA_MEDICALTerm() {
    return hasCovTerm("PIPPA_MEDICAL");
  }
  
  public productmodel.OptionPIPPA_COMBINEDType getPIPPA_COMBINEDTerm() {
    return (productmodel.OptionPIPPA_COMBINEDType)getCovTerm("PIPPA_COMBINED");
  }
  
  public productmodel.OptionPIPPA_DEATHType getPIPPA_DEATHTerm() {
    return (productmodel.OptionPIPPA_DEATHType)getCovTerm("PIPPA_DEATH");
  }
  
  public productmodel.OptionPIPPA_EXTRAMEDType getPIPPA_EXTRAMEDTerm() {
    return (productmodel.OptionPIPPA_EXTRAMEDType)getCovTerm("PIPPA_EXTRAMED");
  }
  
  public productmodel.OptionPIPPA_FUNERALType getPIPPA_FUNERALTerm() {
    return (productmodel.OptionPIPPA_FUNERALType)getCovTerm("PIPPA_FUNERAL");
  }
  
  public productmodel.PackagePIPPA_INCOMEType getPIPPA_INCOMETerm() {
    return (productmodel.PackagePIPPA_INCOMEType)getCovTerm("PIPPA_INCOME");
  }
  
  public productmodel.OptionPIPPA_MEDICALType getPIPPA_MEDICALTerm() {
    return (productmodel.OptionPIPPA_MEDICALType)getCovTerm("PIPPA_MEDICAL");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_PAInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_PA>() {
      public productmodel.CAPIP_PA newEmptyInstance() {
        return new productmodel.CAPIP_PA();
      }
      
      
    });
  }
}