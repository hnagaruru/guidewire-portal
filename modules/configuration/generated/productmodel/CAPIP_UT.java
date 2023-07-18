package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_UT.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_UT extends entity.BAStateCov {
  protected CAPIP_UT()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_UT(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_UT");
  }
  
  public CAPIP_UT(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_UT");
  }
  
  public boolean getHasPIPUT_FUNERALTerm() {
    return hasCovTerm("PIPUT_FUNERAL");
  }
  
  public boolean getHasPIPUT_MEDICALTerm() {
    return hasCovTerm("PIPUT_MEDICAL");
  }
  
  public boolean getHasPIPUT_SURVIVORTerm() {
    return hasCovTerm("PIPUT_SURVIVOR");
  }
  
  public boolean getHasPIPUT_WORKTerm() {
    return hasCovTerm("PIPUT_WORK");
  }
  
  public productmodel.OptionPIPUT_FUNERALType getPIPUT_FUNERALTerm() {
    return (productmodel.OptionPIPUT_FUNERALType)getCovTerm("PIPUT_FUNERAL");
  }
  
  public productmodel.OptionPIPUT_MEDICALType getPIPUT_MEDICALTerm() {
    return (productmodel.OptionPIPUT_MEDICALType)getCovTerm("PIPUT_MEDICAL");
  }
  
  public productmodel.OptionPIPUT_SURVIVORType getPIPUT_SURVIVORTerm() {
    return (productmodel.OptionPIPUT_SURVIVORType)getCovTerm("PIPUT_SURVIVOR");
  }
  
  public productmodel.OptionPIPUT_WORKType getPIPUT_WORKTerm() {
    return (productmodel.OptionPIPUT_WORKType)getCovTerm("PIPUT_WORK");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_UTInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_UT>() {
      public productmodel.CAPIP_UT newEmptyInstance() {
        return new productmodel.CAPIP_UT();
      }
      
      
    });
  }
}