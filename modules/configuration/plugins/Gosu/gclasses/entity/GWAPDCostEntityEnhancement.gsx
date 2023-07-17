package entity

@javax.annotation.Generated("com.guidewire.pl.metadata.codegen.Codegen", "", "APDCost.eti;APDCost.eix;APDCost.etx")
enhancement GWAPDCostEntityEnhancement : entity.APDCost {
  property get Coverage () : entity.Coverage {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.apd.financials.APDCostMethods") as gw.apd.financials.APDCostMethods).Coverage
  }
  
  property get Jurisdiction () : typekey.Jurisdiction {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.apd.financials.APDCostMethods") as gw.apd.financials.APDCostMethods).Jurisdiction
  }
  
  property get OwningCoverable () : entity.Coverable {
    return (com.guidewire.pl.persistence.code.EntityInternalAccess.getImplementation(this, "gw.apd.financials.APDCostMethods") as gw.apd.financials.APDCostMethods).OwningCoverable
  }
  
  
}