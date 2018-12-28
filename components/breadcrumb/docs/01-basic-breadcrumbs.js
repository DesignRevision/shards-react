import React from "react";
import { Breadcrumb, BreadcrumbItem } from "shards-react";

/**
 * ## Basic Example
 *
 * Breadcrumbs can be composed using both the `BreadCrumb` and `BreadcrumbItem` components.
 */
export default function BadgesExamples() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Library</BreadcrumbItem>
    </Breadcrumb>
  );
}
