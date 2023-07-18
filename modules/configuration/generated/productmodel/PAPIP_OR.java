package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_OR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_OR extends entity.PersonalAutoCov {
  protected PAPIP_OR()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_OR(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_OR");
  }
  
  public PAPIP_OR(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_OR");
  }
  
  public boolean getHasPAPIPOR_CHILDCARETerm() {
    return hasCovTerm("PAPIPOR_CHILDCARE");
  }
  
  public boolean getHasPAPIPOR_DEDUCTIBLEappliestoTerm() {
    return hasCovTerm("PAPIPOR_DEDUCTIBLEappliesto");
  }
  
  public boolean getHasPAPIPOR_DEDUCTTerm() {
    return hasCovTerm("PAPIPOR_DEDUCT");
  }
  
  public boolean getHasPAPIPOR_FUNERALTerm() {
    return hasCovTerm("PAPIPOR_FUNERAL");
  }
  
  public boolean getHasPAPIPOR_INCOMETerm() {
    return hasCovTerm("PAPIPOR_INCOME");
  }
  
  public boolean getHasPAPIPOR_MEDTerm() {
    return hasCovTerm("PAPIPOR_MED");
  }
  
  public boolean getHasPAPIPOR_SERVICESTerm() {
    return hasCovTerm("PAPIPOR_SERVICES");
  }
  
  public productmodel.OptionPAPIPOR_CHILDCAREType getPAPIPOR_CHILDCARETerm() {
    return (productmodel.OptionPAPIPOR_CHILDCAREType)getCovTerm("PAPIPOR_CHILDCARE");
  }
  
  public productmodel.TypekeyPAPIPOR_DEDUCTIBLEappliestoType getPAPIPOR_DEDUCTIBLEappliestoTerm() {
    return (productmodel.TypekeyPAPIPOR_DEDUCTIBLEappliestoType)getCovTerm("PAPIPOR_DEDUCTIBLEappliesto");
  }
  
  public productmodel.OptionPAPIPOR_DEDUCTType getPAPIPOR_DEDUCTTerm() {
    return (productmodel.OptionPAPIPOR_DEDUCTType)getCovTerm("PAPIPOR_DEDUCT");
  }
  
  public productmodel.OptionPAPIPOR_FUNERALType getPAPIPOR_FUNERALTerm() {
    return (productmodel.OptionPAPIPOR_FUNERALType)getCovTerm("PAPIPOR_FUNERAL");
  }
  
  public productmodel.OptionPAPIPOR_INCOMEType getPAPIPOR_INCOMETerm() {
    return (productmodel.OptionPAPIPOR_INCOMEType)getCovTerm("PAPIPOR_INCOME");
  }
  
  public productmodel.OptionPAPIPOR_MEDType getPAPIPOR_MEDTerm() {
    return (productmodel.OptionPAPIPOR_MEDType)getCovTerm("PAPIPOR_MED");
  }
  
  public productmodel.OptionPAPIPOR_SERVICESType getPAPIPOR_SERVICESTerm() {
    return (productmodel.OptionPAPIPOR_SERVICESType)getCovTerm("PAPIPOR_SERVICES");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_ORInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_OR>() {
      public productmodel.PAPIP_OR newEmptyInstance() {
        return new productmodel.PAPIP_OR();
      }
      
      
    });
  }
}