package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_OR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_OR extends entity.BAStateCov {
  protected CAPIP_OR()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_OR(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_OR");
  }
  
  public CAPIP_OR(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_OR");
  }
  
  public boolean getHasPIPOR_CHILDCARETerm() {
    return hasCovTerm("PIPOR_CHILDCARE");
  }
  
  public boolean getHasPIPOR_DEDUCTIBLEappliestoTerm() {
    return hasCovTerm("PIPOR_DEDUCTIBLEappliesto");
  }
  
  public boolean getHasPIPOR_DEDUCTTerm() {
    return hasCovTerm("PIPOR_DEDUCT");
  }
  
  public boolean getHasPIPOR_FUNERALTerm() {
    return hasCovTerm("PIPOR_FUNERAL");
  }
  
  public boolean getHasPIPOR_INCOMETerm() {
    return hasCovTerm("PIPOR_INCOME");
  }
  
  public boolean getHasPIPOR_MEDTerm() {
    return hasCovTerm("PIPOR_MED");
  }
  
  public boolean getHasPIPOR_SERVICESTerm() {
    return hasCovTerm("PIPOR_SERVICES");
  }
  
  public productmodel.OptionPIPOR_CHILDCAREType getPIPOR_CHILDCARETerm() {
    return (productmodel.OptionPIPOR_CHILDCAREType)getCovTerm("PIPOR_CHILDCARE");
  }
  
  public productmodel.TypekeyPIPOR_DEDUCTIBLEappliestoType getPIPOR_DEDUCTIBLEappliestoTerm() {
    return (productmodel.TypekeyPIPOR_DEDUCTIBLEappliestoType)getCovTerm("PIPOR_DEDUCTIBLEappliesto");
  }
  
  public productmodel.OptionPIPOR_DEDUCTType getPIPOR_DEDUCTTerm() {
    return (productmodel.OptionPIPOR_DEDUCTType)getCovTerm("PIPOR_DEDUCT");
  }
  
  public productmodel.OptionPIPOR_FUNERALType getPIPOR_FUNERALTerm() {
    return (productmodel.OptionPIPOR_FUNERALType)getCovTerm("PIPOR_FUNERAL");
  }
  
  public productmodel.OptionPIPOR_INCOMEType getPIPOR_INCOMETerm() {
    return (productmodel.OptionPIPOR_INCOMEType)getCovTerm("PIPOR_INCOME");
  }
  
  public productmodel.OptionPIPOR_MEDType getPIPOR_MEDTerm() {
    return (productmodel.OptionPIPOR_MEDType)getCovTerm("PIPOR_MED");
  }
  
  public productmodel.OptionPIPOR_SERVICESType getPIPOR_SERVICESTerm() {
    return (productmodel.OptionPIPOR_SERVICESType)getCovTerm("PIPOR_SERVICES");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_ORInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_OR>() {
      public productmodel.CAPIP_OR newEmptyInstance() {
        return new productmodel.CAPIP_OR();
      }
      
      
    });
  }
}