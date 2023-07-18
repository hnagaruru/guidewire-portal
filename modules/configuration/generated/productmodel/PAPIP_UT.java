package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_UT.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_UT extends entity.PersonalAutoCov {
  protected PAPIP_UT()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_UT(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_UT");
  }
  
  public PAPIP_UT(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_UT");
  }
  
  public boolean getHasPAPIPUT_FUNERALTerm() {
    return hasCovTerm("PAPIPUT_FUNERAL");
  }
  
  public boolean getHasPAPIPUT_MEDICALTerm() {
    return hasCovTerm("PAPIPUT_MEDICAL");
  }
  
  public boolean getHasPAPIPUT_SURVIVORTerm() {
    return hasCovTerm("PAPIPUT_SURVIVOR");
  }
  
  public boolean getHasPAPIPUT_WORKTerm() {
    return hasCovTerm("PAPIPUT_WORK");
  }
  
  public productmodel.OptionPAPIPUT_FUNERALType getPAPIPUT_FUNERALTerm() {
    return (productmodel.OptionPAPIPUT_FUNERALType)getCovTerm("PAPIPUT_FUNERAL");
  }
  
  public productmodel.OptionPAPIPUT_MEDICALType getPAPIPUT_MEDICALTerm() {
    return (productmodel.OptionPAPIPUT_MEDICALType)getCovTerm("PAPIPUT_MEDICAL");
  }
  
  public productmodel.OptionPAPIPUT_SURVIVORType getPAPIPUT_SURVIVORTerm() {
    return (productmodel.OptionPAPIPUT_SURVIVORType)getCovTerm("PAPIPUT_SURVIVOR");
  }
  
  public productmodel.OptionPAPIPUT_WORKType getPAPIPUT_WORKTerm() {
    return (productmodel.OptionPAPIPUT_WORKType)getCovTerm("PAPIPUT_WORK");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_UTInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_UT>() {
      public productmodel.PAPIP_UT newEmptyInstance() {
        return new productmodel.PAPIP_UT();
      }
      
      
    });
  }
}