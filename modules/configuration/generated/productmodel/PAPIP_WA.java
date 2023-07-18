package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_WA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_WA extends entity.PersonalAutoCov {
  protected PAPIP_WA()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_WA(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_WA");
  }
  
  public PAPIP_WA(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_WA");
  }
  
  public boolean getHasPAPIPWA_FUNERALTerm() {
    return hasCovTerm("PAPIPWA_FUNERAL");
  }
  
  public boolean getHasPAPIPWA_INCOMETerm() {
    return hasCovTerm("PAPIPWA_INCOME");
  }
  
  public boolean getHasPAPIPWA_MEDTerm() {
    return hasCovTerm("PAPIPWA_MED");
  }
  
  public boolean getHasPAPIPWA_SERVICESTerm() {
    return hasCovTerm("PAPIPWA_SERVICES");
  }
  
  public productmodel.OptionPAPIPWA_FUNERALType getPAPIPWA_FUNERALTerm() {
    return (productmodel.OptionPAPIPWA_FUNERALType)getCovTerm("PAPIPWA_FUNERAL");
  }
  
  public productmodel.OptionPAPIPWA_INCOMEType getPAPIPWA_INCOMETerm() {
    return (productmodel.OptionPAPIPWA_INCOMEType)getCovTerm("PAPIPWA_INCOME");
  }
  
  public productmodel.OptionPAPIPWA_MEDType getPAPIPWA_MEDTerm() {
    return (productmodel.OptionPAPIPWA_MEDType)getCovTerm("PAPIPWA_MED");
  }
  
  public productmodel.OptionPAPIPWA_SERVICESType getPAPIPWA_SERVICESTerm() {
    return (productmodel.OptionPAPIPWA_SERVICESType)getCovTerm("PAPIPWA_SERVICES");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_WAInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_WA>() {
      public productmodel.PAPIP_WA newEmptyInstance() {
        return new productmodel.PAPIP_WA();
      }
      
      
    });
  }
}