package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_NJ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_NJ extends entity.PersonalAutoCov {
  protected PAPIP_NJ()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_NJ(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_NJ");
  }
  
  public PAPIP_NJ(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_NJ");
  }
  
  public boolean getHasPAPIPNJ_MEDDEDUCTTerm() {
    return hasCovTerm("PAPIPNJ_MEDDEDUCT");
  }
  
  public boolean getHasPAPIPNJ_MEDDEDUCTappliestoTerm() {
    return hasCovTerm("PAPIPNJ_MEDDEDUCTappliesto");
  }
  
  public boolean getHasPAPIPNJ_MEDLIMITTerm() {
    return hasCovTerm("PAPIPNJ_MEDLIMIT");
  }
  
  public boolean getHasPAPIPNJ_MEDONLYTerm() {
    return hasCovTerm("PAPIPNJ_MEDONLY");
  }
  
  public boolean getHasPAPIPNJ_MED_COPAYTerm() {
    return hasCovTerm("PAPIPNJ_MED_COPAY");
  }
  
  public boolean getHasPAPIPNJ_MEDsecondaryTerm() {
    return hasCovTerm("PAPIPNJ_MEDsecondary");
  }
  
  public boolean getHasPAPIPNJ_OTHER_LIMSTerm() {
    return hasCovTerm("PAPIPNJ_OTHER_LIMS");
  }
  
  public productmodel.OptionPAPIPNJ_MEDDEDUCTType getPAPIPNJ_MEDDEDUCTTerm() {
    return (productmodel.OptionPAPIPNJ_MEDDEDUCTType)getCovTerm("PAPIPNJ_MEDDEDUCT");
  }
  
  public productmodel.TypekeyPAPIPNJ_MEDDEDUCTappliestoType getPAPIPNJ_MEDDEDUCTappliestoTerm() {
    return (productmodel.TypekeyPAPIPNJ_MEDDEDUCTappliestoType)getCovTerm("PAPIPNJ_MEDDEDUCTappliesto");
  }
  
  public productmodel.OptionPAPIPNJ_MEDLIMITType getPAPIPNJ_MEDLIMITTerm() {
    return (productmodel.OptionPAPIPNJ_MEDLIMITType)getCovTerm("PAPIPNJ_MEDLIMIT");
  }
  
  public productmodel.GenericPAPIPNJ_MEDONLYType getPAPIPNJ_MEDONLYTerm() {
    return (productmodel.GenericPAPIPNJ_MEDONLYType)getCovTerm("PAPIPNJ_MEDONLY");
  }
  
  public productmodel.GenericPAPIPNJ_MED_COPAYType getPAPIPNJ_MED_COPAYTerm() {
    return (productmodel.GenericPAPIPNJ_MED_COPAYType)getCovTerm("PAPIPNJ_MED_COPAY");
  }
  
  public productmodel.GenericPAPIPNJ_MEDsecondaryType getPAPIPNJ_MEDsecondaryTerm() {
    return (productmodel.GenericPAPIPNJ_MEDsecondaryType)getCovTerm("PAPIPNJ_MEDsecondary");
  }
  
  public productmodel.PackagePAPIPNJ_OTHER_LIMSType getPAPIPNJ_OTHER_LIMSTerm() {
    return (productmodel.PackagePAPIPNJ_OTHER_LIMSType)getCovTerm("PAPIPNJ_OTHER_LIMS");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_NJInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_NJ>() {
      public productmodel.PAPIP_NJ newEmptyInstance() {
        return new productmodel.PAPIP_NJ();
      }
      
      
    });
  }
}