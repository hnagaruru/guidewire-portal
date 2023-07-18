package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_MI extends entity.PersonalAutoCov {
  protected PAPIP_MI()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_MI(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_MI");
  }
  
  public PAPIP_MI(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_MI");
  }
  
  public boolean getHasPAPIPMI_DEDUCTIBLETerm() {
    return hasCovTerm("PAPIPMI_DEDUCTIBLE");
  }
  
  public boolean getHasPAPIPMI_FUNERALTerm() {
    return hasCovTerm("PAPIPMI_FUNERAL");
  }
  
  public boolean getHasPAPIPMI_INCOMETerm() {
    return hasCovTerm("PAPIPMI_INCOME");
  }
  
  public boolean getHasPAPIPMI_MEDTerm() {
    return hasCovTerm("PAPIPMI_MED");
  }
  
  public boolean getHasPAPIPMI_OtherProviderTerm() {
    return hasCovTerm("PAPIPMI_OtherProvider");
  }
  
  public boolean getHasPAPIPMI_SERVICESTerm() {
    return hasCovTerm("PAPIPMI_SERVICES");
  }
  
  public boolean getHasPAPIPMI_SURVIVORTerm() {
    return hasCovTerm("PAPIPMI_SURVIVOR");
  }
  
  public productmodel.OptionPAPIPMI_DEDUCTIBLEType getPAPIPMI_DEDUCTIBLETerm() {
    return (productmodel.OptionPAPIPMI_DEDUCTIBLEType)getCovTerm("PAPIPMI_DEDUCTIBLE");
  }
  
  public productmodel.OptionPAPIPMI_FUNERALType getPAPIPMI_FUNERALTerm() {
    return (productmodel.OptionPAPIPMI_FUNERALType)getCovTerm("PAPIPMI_FUNERAL");
  }
  
  public productmodel.GenericPAPIPMI_INCOMEType getPAPIPMI_INCOMETerm() {
    return (productmodel.GenericPAPIPMI_INCOMEType)getCovTerm("PAPIPMI_INCOME");
  }
  
  public productmodel.GenericPAPIPMI_MEDType getPAPIPMI_MEDTerm() {
    return (productmodel.GenericPAPIPMI_MEDType)getCovTerm("PAPIPMI_MED");
  }
  
  public productmodel.TypekeyPAPIPMI_OtherProviderType getPAPIPMI_OtherProviderTerm() {
    return (productmodel.TypekeyPAPIPMI_OtherProviderType)getCovTerm("PAPIPMI_OtherProvider");
  }
  
  public productmodel.OptionPAPIPMI_SERVICESType getPAPIPMI_SERVICESTerm() {
    return (productmodel.OptionPAPIPMI_SERVICESType)getCovTerm("PAPIPMI_SERVICES");
  }
  
  public productmodel.GenericPAPIPMI_SURVIVORType getPAPIPMI_SURVIVORTerm() {
    return (productmodel.GenericPAPIPMI_SURVIVORType)getCovTerm("PAPIPMI_SURVIVOR");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_MIInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_MI>() {
      public productmodel.PAPIP_MI newEmptyInstance() {
        return new productmodel.PAPIP_MI();
      }
      
      
    });
  }
}