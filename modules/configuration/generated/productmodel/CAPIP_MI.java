package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_MI extends entity.BAStateCov {
  protected CAPIP_MI()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_MI(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_MI");
  }
  
  public CAPIP_MI(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_MI");
  }
  
  public boolean getHasPIPMI_DEDUCTIBLETerm() {
    return hasCovTerm("PIPMI_DEDUCTIBLE");
  }
  
  public boolean getHasPIPMI_FUNERALTerm() {
    return hasCovTerm("PIPMI_FUNERAL");
  }
  
  public boolean getHasPIPMI_INCOMETerm() {
    return hasCovTerm("PIPMI_INCOME");
  }
  
  public boolean getHasPIPMI_MEDTerm() {
    return hasCovTerm("PIPMI_MED");
  }
  
  public boolean getHasPIPMI_OtherProviderTerm() {
    return hasCovTerm("PIPMI_OtherProvider");
  }
  
  public boolean getHasPIPMI_SERVICESTerm() {
    return hasCovTerm("PIPMI_SERVICES");
  }
  
  public boolean getHasPIPMI_SURVIVORTerm() {
    return hasCovTerm("PIPMI_SURVIVOR");
  }
  
  public productmodel.OptionPIPMI_DEDUCTIBLEType getPIPMI_DEDUCTIBLETerm() {
    return (productmodel.OptionPIPMI_DEDUCTIBLEType)getCovTerm("PIPMI_DEDUCTIBLE");
  }
  
  public productmodel.OptionPIPMI_FUNERALType getPIPMI_FUNERALTerm() {
    return (productmodel.OptionPIPMI_FUNERALType)getCovTerm("PIPMI_FUNERAL");
  }
  
  public productmodel.GenericPIPMI_INCOMEType getPIPMI_INCOMETerm() {
    return (productmodel.GenericPIPMI_INCOMEType)getCovTerm("PIPMI_INCOME");
  }
  
  public productmodel.GenericPIPMI_MEDType getPIPMI_MEDTerm() {
    return (productmodel.GenericPIPMI_MEDType)getCovTerm("PIPMI_MED");
  }
  
  public productmodel.TypekeyPIPMI_OtherProviderType getPIPMI_OtherProviderTerm() {
    return (productmodel.TypekeyPIPMI_OtherProviderType)getCovTerm("PIPMI_OtherProvider");
  }
  
  public productmodel.OptionPIPMI_SERVICESType getPIPMI_SERVICESTerm() {
    return (productmodel.OptionPIPMI_SERVICESType)getCovTerm("PIPMI_SERVICES");
  }
  
  public productmodel.GenericPIPMI_SURVIVORType getPIPMI_SURVIVORTerm() {
    return (productmodel.GenericPIPMI_SURVIVORType)getCovTerm("PIPMI_SURVIVOR");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_MIInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_MI>() {
      public productmodel.CAPIP_MI newEmptyInstance() {
        return new productmodel.CAPIP_MI();
      }
      
      
    });
  }
}