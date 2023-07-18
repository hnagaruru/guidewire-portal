package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_ND.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_ND extends entity.BAStateCov {
  protected CAPIP_ND()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_ND(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_ND");
  }
  
  public CAPIP_ND(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_ND");
  }
  
  public productmodel.OptionCAPIP_ND_INCOMEType getCAPIP_ND_INCOMETerm() {
    return (productmodel.OptionCAPIP_ND_INCOMEType)getCovTerm("CAPIP_ND_INCOME");
  }
  
  public productmodel.OptionCAPIP_ND_MEDICALType getCAPIP_ND_MEDICALTerm() {
    return (productmodel.OptionCAPIP_ND_MEDICALType)getCovTerm("CAPIP_ND_MEDICAL");
  }
  
  public boolean getHasCAPIP_ND_INCOMETerm() {
    return hasCovTerm("CAPIP_ND_INCOME");
  }
  
  public boolean getHasCAPIP_ND_MEDICALTerm() {
    return hasCovTerm("CAPIP_ND_MEDICAL");
  }
  
  public boolean getHasPIPND_AGGTerm() {
    return hasCovTerm("PIPND_AGG");
  }
  
  public boolean getHasPIPND_FUNERALTerm() {
    return hasCovTerm("PIPND_FUNERAL");
  }
  
  public boolean getHasPIPND_SERVICETerm() {
    return hasCovTerm("PIPND_SERVICE");
  }
  
  public boolean getHasPIPND_SURVIVORTerm() {
    return hasCovTerm("PIPND_SURVIVOR");
  }
  
  public productmodel.OptionPIPND_AGGType getPIPND_AGGTerm() {
    return (productmodel.OptionPIPND_AGGType)getCovTerm("PIPND_AGG");
  }
  
  public productmodel.OptionPIPND_FUNERALType getPIPND_FUNERALTerm() {
    return (productmodel.OptionPIPND_FUNERALType)getCovTerm("PIPND_FUNERAL");
  }
  
  public productmodel.OptionPIPND_SERVICEType getPIPND_SERVICETerm() {
    return (productmodel.OptionPIPND_SERVICEType)getCovTerm("PIPND_SERVICE");
  }
  
  public productmodel.OptionPIPND_SURVIVORType getPIPND_SURVIVORTerm() {
    return (productmodel.OptionPIPND_SURVIVORType)getCovTerm("PIPND_SURVIVOR");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_NDInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_ND>() {
      public productmodel.CAPIP_ND newEmptyInstance() {
        return new productmodel.CAPIP_ND();
      }
      
      
    });
  }
}