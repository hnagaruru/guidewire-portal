package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_WA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_WA extends entity.BAStateCov {
  protected CAPIP_WA()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_WA(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_WA");
  }
  
  public CAPIP_WA(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_WA");
  }
  
  public boolean getHasPIPWA_FUNERALTerm() {
    return hasCovTerm("PIPWA_FUNERAL");
  }
  
  public boolean getHasPIPWA_INCOMETerm() {
    return hasCovTerm("PIPWA_INCOME");
  }
  
  public boolean getHasPIPWA_MEDTerm() {
    return hasCovTerm("PIPWA_MED");
  }
  
  public boolean getHasPIPWA_SERVICESTerm() {
    return hasCovTerm("PIPWA_SERVICES");
  }
  
  public productmodel.OptionPIPWA_FUNERALType getPIPWA_FUNERALTerm() {
    return (productmodel.OptionPIPWA_FUNERALType)getCovTerm("PIPWA_FUNERAL");
  }
  
  public productmodel.OptionPIPWA_INCOMEType getPIPWA_INCOMETerm() {
    return (productmodel.OptionPIPWA_INCOMEType)getCovTerm("PIPWA_INCOME");
  }
  
  public productmodel.OptionPIPWA_MEDType getPIPWA_MEDTerm() {
    return (productmodel.OptionPIPWA_MEDType)getCovTerm("PIPWA_MED");
  }
  
  public productmodel.OptionPIPWA_SERVICESType getPIPWA_SERVICESTerm() {
    return (productmodel.OptionPIPWA_SERVICESType)getCovTerm("PIPWA_SERVICES");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_WAInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_WA>() {
      public productmodel.CAPIP_WA newEmptyInstance() {
        return new productmodel.CAPIP_WA();
      }
      
      
    });
  }
}