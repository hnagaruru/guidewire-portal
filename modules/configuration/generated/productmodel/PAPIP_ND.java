package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_ND.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_ND extends entity.PersonalAutoCov {
  protected PAPIP_ND()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_ND(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_ND");
  }
  
  public PAPIP_ND(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_ND");
  }
  
  public boolean getHasPAPIPND_AGGTerm() {
    return hasCovTerm("PAPIPND_AGG");
  }
  
  public boolean getHasPAPIPND_FUNERALTerm() {
    return hasCovTerm("PAPIPND_FUNERAL");
  }
  
  public boolean getHasPAPIPND_SERVICETerm() {
    return hasCovTerm("PAPIPND_SERVICE");
  }
  
  public boolean getHasPAPIPND_SURVIVORTerm() {
    return hasCovTerm("PAPIPND_SURVIVOR");
  }
  
  public boolean getHasPAPIP_ND_INCOMETerm() {
    return hasCovTerm("PAPIP_ND_INCOME");
  }
  
  public boolean getHasPAPIP_ND_MEDICALTerm() {
    return hasCovTerm("PAPIP_ND_MEDICAL");
  }
  
  public productmodel.OptionPAPIPND_AGGType getPAPIPND_AGGTerm() {
    return (productmodel.OptionPAPIPND_AGGType)getCovTerm("PAPIPND_AGG");
  }
  
  public productmodel.OptionPAPIPND_FUNERALType getPAPIPND_FUNERALTerm() {
    return (productmodel.OptionPAPIPND_FUNERALType)getCovTerm("PAPIPND_FUNERAL");
  }
  
  public productmodel.OptionPAPIPND_SERVICEType getPAPIPND_SERVICETerm() {
    return (productmodel.OptionPAPIPND_SERVICEType)getCovTerm("PAPIPND_SERVICE");
  }
  
  public productmodel.OptionPAPIPND_SURVIVORType getPAPIPND_SURVIVORTerm() {
    return (productmodel.OptionPAPIPND_SURVIVORType)getCovTerm("PAPIPND_SURVIVOR");
  }
  
  public productmodel.OptionPAPIP_ND_INCOMEType getPAPIP_ND_INCOMETerm() {
    return (productmodel.OptionPAPIP_ND_INCOMEType)getCovTerm("PAPIP_ND_INCOME");
  }
  
  public productmodel.OptionPAPIP_ND_MEDICALType getPAPIP_ND_MEDICALTerm() {
    return (productmodel.OptionPAPIP_ND_MEDICALType)getCovTerm("PAPIP_ND_MEDICAL");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_NDInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_ND>() {
      public productmodel.PAPIP_ND newEmptyInstance() {
        return new productmodel.PAPIP_ND();
      }
      
      
    });
  }
}