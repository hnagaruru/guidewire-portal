package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeY2KDesignated.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeY2KDesignated extends entity.GeneralLiabilityExcl {
  protected ExcludeY2KDesignated()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeY2KDesignated(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeY2KDesignated");
  }
  
  public ExcludeY2KDesignated(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeY2KDesignated");
  }
  
  public productmodel.TypekeyExcludeExposureTypeType getExcludeExposureTypeTerm() {
    return (productmodel.TypekeyExcludeExposureTypeType)getCovTerm("ExcludeExposureType");
  }
  
  public productmodel.GenericExcludeY2KBIType getExcludeY2KBITerm() {
    return (productmodel.GenericExcludeY2KBIType)getCovTerm("ExcludeY2KBI");
  }
  
  public productmodel.GenericExcludeY2KPDType getExcludeY2KPDTerm() {
    return (productmodel.GenericExcludeY2KPDType)getCovTerm("ExcludeY2KPD");
  }
  
  public productmodel.GenericExcludeY2KPersAdverInjType getExcludeY2KPersAdverInjTerm() {
    return (productmodel.GenericExcludeY2KPersAdverInjType)getCovTerm("ExcludeY2KPersAdverInj");
  }
  
  public productmodel.GenericExcludedDescriptionType getExcludedDescriptionTerm() {
    return (productmodel.GenericExcludedDescriptionType)getCovTerm("ExcludedDescription");
  }
  
  public boolean getHasExcludeExposureTypeTerm() {
    return hasCovTerm("ExcludeExposureType");
  }
  
  public boolean getHasExcludeY2KBITerm() {
    return hasCovTerm("ExcludeY2KBI");
  }
  
  public boolean getHasExcludeY2KPDTerm() {
    return hasCovTerm("ExcludeY2KPD");
  }
  
  public boolean getHasExcludeY2KPersAdverInjTerm() {
    return hasCovTerm("ExcludeY2KPersAdverInj");
  }
  
  public boolean getHasExcludedDescriptionTerm() {
    return hasCovTerm("ExcludedDescription");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeY2KDesignatedInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeY2KDesignated>() {
      public productmodel.ExcludeY2KDesignated newEmptyInstance() {
        return new productmodel.ExcludeY2KDesignated();
      }
      
      
    });
  }
}